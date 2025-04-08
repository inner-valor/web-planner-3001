import { homePageTemplate, editPageTemplate, listPageTemplate } from "./pageManager";
import listPageFunction from "./listPage";
import homePageFunction from "./homePage";
import createEditPageFunction from "./createEditpage";

export function homePageController(data) {
    homePageTemplate(data);
    homePageFunction(data);
}

export function listPageController(selectedData, storedData) {
    listPageTemplate();
    listPageFunction(selectedData, storedData);
}

export function createEditPageController(selectedData, storedData) {
    editPageTemplate();
    createEditPageFunction(selectedData, storedData);
}