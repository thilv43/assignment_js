import NewsList from "../compoments/newList";

const NewsPage = {
    render() {
        return /* html */ `
            <h1>News Page</h1>
            ${NewsList.render()}
        `;
    },
};
export default NewsPage;