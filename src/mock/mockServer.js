import Mock from "mockjs"       //必须大写M
import banner from "./banner.json"
import floor from "./floor.json"

Mock.mock("/mock/banner",{Code:200,data:banner})
Mock.mock("/mock/floor",{Code:200,data:floor})