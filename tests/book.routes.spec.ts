import "mocha";
import ChaiHttp = require("chai-http");
import chai from "chai";

chai.use(ChaiHttp);

describe("test route", function () {
    it("GET SERVER", function (done) {
        chai.request("http://localhost:3000")
            .get("/")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                done(err);
            });
    });
    it("GET BOOK 200", function (done) {
        chai.request("http://localhost:3000")
            .get("/book/2")
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res).to.have.property("body");
                chai.expect(res.body).to.have.property("id");
                chai.expect(res.body).to.have.property("name");
                chai.expect(res.body).to.have.property("author");
                chai.expect(res.body).to.have.property("year");
                chai.expect(res.body).to.have.property("numberOfPages");
                done(err);
            });
    });
    it("GET BOOK 404", function (done) {
        chai.request("http://localhost:3000")
            .get("/book/1")
            .end((err, res) => {
                chai.expect(res).to.have.status(404);
                chai.expect(res).to.have.property("body");
                chai.expect(res.body).to.have.property("error");
                chai.expect(res.body).to.have.property("message");
                chai.expect(res.body.error).to.have.equal(true);
                chai.expect(res.body.message).to.have.equal("Нет книги с id 1");
                done(err);
            });
    });
    it("POST BOOK 201", function (done) {
        chai.request("http://localhost:3000")
            .post("/book")
            .send({
                name: "Дюна6",
                author: "Герберт Уэлс",
                year: 1967,
                numberOfPages: 1000,
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(201);
                chai.expect(res).to.have.property("body");
                chai.expect(res.body).to.have.property("id");
                chai.expect(res.body).to.have.property("name");
                chai.expect(res.body).to.have.property("author");
                chai.expect(res.body).to.have.property("year");
                chai.expect(res.body).to.have.property("numberOfPages");
                done(err);
            });
    });
    it("POST BOOK 404", function (done) {
        chai.request("http://localhost:3000")
            .post("/book")
            .send({
                name: "Дюна5",
                author: "Герберт Уэлс",
                year: 1967,
                numberOfPages: 1000,
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(404);
                chai.expect(res).to.have.property("body");
                chai.expect(res.body).to.have.property("error");
                chai.expect(res.body).to.have.property("message");
                chai.expect(res.body.error).to.have.equal(true);
                chai.expect(res.body.message).to.have.equal(
                    "ER_DUP_ENTRY: Duplicate entry 'Дюна5-Герберт Уэлс' for key 'name_author'"
                );
                done(err);
            });
    });
});
