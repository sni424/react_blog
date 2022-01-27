import MovieList from "./pages/MovieList";
import Users from "./pages/Users";
import UsersInfo from "./pages/UserInfo";

export default [
    {
        path: "/movies",
        componenet: MovieList,
    },
    {
        path: "/users",
        componenet: Users,
    },
    {
        path: "/users/:id",
        componenet: UsersInfo,
    },
];