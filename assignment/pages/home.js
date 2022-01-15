import Header from "../compoments/header";
import Banner from "../compoments/banner";
import NewsList from "../compoments/newList";
import Footer from "../compoments/footer";

const HomePage = {
    render() {
        return /* html */`
        <div class="max-w-screen-lg m-auto">
            
                ${Header.render()}
            
            <div>
                ${Banner.render()}
            </div>
            <div>
                ${NewsList.render()}
            </div>
        
                ${Footer.render()}
            
        </div>
        
        `;
    },
};
export default HomePage;