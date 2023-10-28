import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
		<div className="errorpage">
			<div>
				<button className="errorback-btn">
					<Link key={1} className='go-back-txt' to="/">
						Go Back Home
					</Link>
				</button>
			</div>
			<img src="../../../images/404pagenotfound.svg" className="error-img"></img>
		</div>
	);
};
export default ErrorPage;
