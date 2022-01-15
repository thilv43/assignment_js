import Header from "../compoments/header";
import Banner from "../compoments/banner";
import Footer from "../compoments/footer";

const ContactPage = {
    render() {
        return /* html */`
        <div class="max-w-screen-lg m-auto">
            
                ${Header.render()}
            
            <div>
                ${Banner.render()}
            </div>
            <div>
                <h1> ContactPage </h1>
                
            </div>
        
                ${Footer.render()}
            
        </div>
        
        `;
    },
};
export default ContactPage;