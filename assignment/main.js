import Navigo from "navigo";
import Header from "./compoments/header";
import AboutPage from "./pages/about";
import DetailNewsPage from "./pages/detailNew";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import Footer from "./compoments/footer";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
});
router.resolve();

// router.on({
//     "/": () => {
//         console.log("Home Page");
//     },
//     "/about": () => {
//         console.log("About Page");
//     },
// });
// // router.on("/", function (){
//     console.log('Home page');
// });
// // router.on("/", function (){
//     console.log('About page');
// });

// router.resolve();

// // ES5
// function Anina(color) {
//     this.color = color;
//     this.showInfo = function () {
//         console.log(this.color);
//     };
// }
// const cat = new Anina("màu vàng");
// cat.showInfo();
// console.log(cat.color);

// // ES6

// class ConVat {
//     constructor(color) {
//         this.color = color;
//     }

//     showInfo() {
//         console.log(this.color);
//     }
// }
// const cat2 = new ConVat("mau do");

// const router = class TuongPhep {
//     constructor(name, congVatLy, congPhep) {
//         this.tenTuong = name;
//         this.congVatLyTuong = congVatLy;
//         this.congPhepTuong = congPhep;
//     }

//     showInfor() {
//         console.log(`
//             ${this.tenTuong}
//             ${this.congVatLyTuong}
//             ${this.congPhepTuong}
//         `);
//     }
// };

// const tuong1 = new TuongPhep("natalya", 150, 0);
// console.log(tuong1.tenTuong);

// const person = {
//     // object litteral
//     name: "Dat",
//     showInfo: () => {
//         console.log(this.name);
//     },
// };
// person.showInfo();