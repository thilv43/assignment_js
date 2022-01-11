import Banner from "../compoments/banner";
import NewsList from "../compoments/newList";

const HomePage = {
    render() {
        return /* html */`
        
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
                ${NewsList.print()}
            </div>
        `;
    },
};
export default HomePage;