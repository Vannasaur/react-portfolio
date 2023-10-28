import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
		<div className="errorpage">
			<div>
				
					<Link key={1} className='go-back-txt' to="/">
					<button className="errorback-btn">
					Go Back Home
					</button>
					</Link>
				
			</div>
			<img src="../../../images/404pagenotfound.svg" className="error-img"></img>
		</div>
	);
};
export default ErrorPage;
