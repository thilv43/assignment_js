import Header from "../compoments/header";
import Banner from "../compoments/banner";
import Footer from "../compoments/footer";

const NewsPage = {
    render() {
        return /* html */`
        <div class="max-w-screen-lg m-auto">
            
                ${Header.render()}
            
            <div>
                ${Banner.render()}
            </div>
            <div>
            <h1> News Page </h1>
            </div>
        
                ${Footer.render()}
            
        </div>
        
        `;
    },
};
export default NewsPage;