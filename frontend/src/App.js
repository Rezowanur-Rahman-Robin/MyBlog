import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';
import Header from './components/Header';
import './css/style.css';
import './css/animate.css';
import './css/responsive.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './css/flaticon.css';
import './css/customize.css';
import './css/adminstyle.css';
import Footer from './components/Footer';
import LanguageScreen from './screens/LanguageScreen';
import LoginScreen from './screens/LoginScreen';
import AdminProfileScreen from './screens/Admin/AdminProfileScreen';
import ViewBlogSreen from './screens/Admin/ViewBlogSreen';
import InsertBlogScreen from './screens/Admin/InsertBlogScreen';
import CategoryScreen from './screens/CategoryScreen';
import EditBlogScreen from './screens/Admin/EditBlogScreen';
import ContactScreen from './screens/ContactScreen';
import ScrollToTop from './components/ScrollToTop ';





function App() {
  return (
    <div className="App">





      <Router>
        <ScrollToTop>


        
        <Header />
         

          <Route path='/language/:lan_type' component={LanguageScreen }></Route>

          <Route path='/category/:cat_type' component={CategoryScreen}></Route>

          <Route path='/blog/:id'  component={BlogScreen } ></Route>

          <Route path='/adminArea/blog/edit/:id'  component={EditBlogScreen} ></Route>

          <Route path='/adminArea/profile'  component={AdminProfileScreen} ></Route>

          <Route path='/adminArea/viewBlog'  component={ViewBlogSreen} ></Route>

          <Route path='/adminArea/createBlog'  component={InsertBlogScreen} ></Route>

          <Route path='/adminArea/login'  component={LoginScreen } ></Route>

          <Route path='/contact' component={ContactScreen} exact></Route>

          <Route path='/' component={HomeScreen } exact></Route>
     

        <Footer/>

        </ScrollToTop>



      </Router>



      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>

    </div>
  );
}

export default App;
