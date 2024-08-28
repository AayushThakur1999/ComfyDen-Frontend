import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className="grid place-items-center min-h-screen px-8">
        <div className="text-center">
          <p className="text-9xl text-primary font-semibold">404</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mt-4">
            page not found
          </h1>
          <p className="text-lg mt-6">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid place-items-center min-h-screen px-8">
      <h4 className="text-center text-4xl font-bold">there was an error...</h4>
    </main>
  );
};
export default Error;
