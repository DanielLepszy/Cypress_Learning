import Example1Page from "./example1Page";
import MainPage from "./mainPage";

class BaseFactory  {

    getMainPage() {
        return new MainPage()
    }
    getExampl1Page() {
        return new Example1Page()
    }
}
export default BaseFactory;
