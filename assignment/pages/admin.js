import Dashboard from "./dashbourd";
// import Add from "../admin/add";
// import Edit from "../admin/edit";
const AdminPages = {
    render() {
        return /* html */ `
        <div>
        ${Dashboard.render()}
        </div>
        
        `;
    },
};
export default AdminPages;