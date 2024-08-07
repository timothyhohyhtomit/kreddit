import { expect } from "chai";

import { validateContent, validateTitle } from "../../../routes/post/postUtil.js";
import { post } from "../../../constant.js";

describe("Test postUtil.js", () => {
    describe("Test validateTitle()", () => {
        it("On input of number type, should throw NOT_STRING error", () => {
            const titleInt = 2024;
            expect(() => validateTitle(titleInt)).to.throw(post.create.title.error.NOT_STRING);
            const titleDouble = 3.14159;
            expect(() => validateTitle(titleDouble)).to.throw(post.create.title.error.NOT_STRING);
        });
        it("On input of boolean type, should throw NOT_STRING error", () => {
            const titleBooleanTrue = true;
            expect(() => validateTitle(titleBooleanTrue)).to.throw(post.create.title.error.NOT_STRING);
            const titleBooleanFalse = false;
            expect(() => validateTitle(titleBooleanFalse)).to.throw(post.create.title.error.NOT_STRING);
        });
        it("On input of object type, should throw NOT_STRING error", () => {
            const titleObjEmpty = {};
            expect(() => validateTitle(titleObjEmpty)).to.throw(post.create.title.error.NOT_STRING);
            const titleObjNonempty = {
                make: "Subaru",
                model: "Crosstrek",
                year: 2013,
                colour: "Grey"
            };
            expect(() => validateTitle(titleObjNonempty)).to.throw(post.create.title.error.NOT_STRING);
        });
        it("On input of array type, should throw NOT_STRING error", () => {
            const titleArrayEmpty = [];
            expect(() => validateTitle(titleArrayEmpty)).to.throw(post.create.title.error.NOT_STRING);
            const titleArrayNonempty = [1, 1, 2, 3, 5, 8, 13];
            expect(() => validateTitle(titleArrayNonempty)).to.throw(post.create.title.error.NOT_STRING);
        });
        it("On input of an empty string, should throw an IS_EMPTY error", () => {
            const titleEmptyString = "";
            expect(() => validateTitle(titleEmptyString)).to.throw(post.create.title.error.IS_EMPTY);
        });
        it("On input of a string longer than MAX_LENGTH, should throw an EXCEED_LIMIT error", () => {
            const titleLongString = "x".repeat(post.create.title.MAX_LENGTH + 1);
            expect(() => validateTitle(titleLongString)).to.throw(post.create.title.error.EXCEED_LIMIT);
        });
        it("On input of a valid string, should not throw any error and return", () => {
            const titleAlphabetic = "Nostalgia";
            expect(() => validateTitle(titleAlphabetic)).to.not.throw();
            const titleAlphanumeric = "Denver,CO";
            expect(() => validateTitle(titleAlphanumeric)).to.not.throw();
            const titleAlphanumericSpace = "Beethoven: Moonlight Sonata 3rd Mov.";
            expect(() => validateTitle(titleAlphanumericSpace)).to.not.throw();
        });
    });
    describe("Test validateContent()", () => {
        it("On input of number type, should throw NOT_STRING error", () => {
            const contentInt = 299792458;
            expect(() => validateContent(contentInt)).to.throw(post.create.content.error.NOT_STRING);
            const contentDouble = 6.62607015;
            expect(() => validateContent(contentDouble)).to.throw(post.create.content.error.NOT_STRING);
        });
        it("On input of boolean type, should throw NOT_STRING error", () => {
            const contentBooleanTrue = true;
            expect(() => validateContent(contentBooleanTrue)).to.throw(post.create.content.error.NOT_STRING);
            const contentBooleanFalse = false;
            expect(() => validateContent(contentBooleanFalse)).to.throw(post.create.content.error.NOT_STRING);
        });
        it("On input of object type, should throw NOT_STRING error", () => {
            const contentObjEmpty = {};
            expect(() => validateContent(contentObjEmpty)).to.throw(post.create.content.error.NOT_STRING);
            const contentObjNonempty = {
                make: "Subaru",
                model: "Crosstrek",
                year: 2013,
                colour: "Grey"
            };
            expect(() => validateContent(contentObjNonempty)).to.throw(post.create.content.error.NOT_STRING);
        });
        it("On input of array type, should throw NOT_STRING error", () => {
            const contentArrayEmpty = [];
            expect(() => validateContent(contentArrayEmpty)).to.throw(post.create.content.error.NOT_STRING);
            const contentArrayNonempty = [1, 1, 2, 3, 5, 8, 13];
            expect(() => validateContent(contentArrayNonempty)).to.throw(post.create.content.error.NOT_STRING);
        });
        it("On input of an empty string, should throw an IS_EMPTY error", () => {
            const contentEmptyString = "";
            expect(() => validateContent(contentEmptyString)).to.throw(post.create.content.error.IS_EMPTY);
        });
        it("On input of a string longer than MAX_LENGTH, should throw an EXCEED_LIMIT error", () => {
            const contentLongString = "x".repeat(post.create.content.MAX_LENGTH + 1);
            expect(() => validateContent(contentLongString)).to.throw(post.create.content.error.EXCEED_LIMIT);
        });
        it("On input of a valid string, should not throw any error and return", () => {
            const contentAlphabetic = "Nostalgia";
            expect(() => validateContent(contentAlphabetic)).to.not.throw();
            const contentAlphanumeric = "Denver,CO";
            expect(() => validateContent(contentAlphanumeric)).to.not.throw();
            const contentAlphanumericSpace = "Beethoven: Moonlight Sonata 3rd Mov.";
            expect(() => validateContent(contentAlphanumericSpace)).to.not.throw();
        });
    });
});