import EmailList from "./pages/EmailList/EmailList"
import Mail from "./pages/Mail/Mail"

let routes=[
    {path:'/' , element:<EmailList />},
    {path:'/mail' , element:<Mail/>}
]

export default routes