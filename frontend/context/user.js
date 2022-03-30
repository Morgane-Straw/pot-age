import { createContext, useState, useEffect, useContext } from "react";
// import { auth } from 'utils/auth';
const Context = createContext();
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(
        {
            id: 'kr1',
            situation:'',            
            nom: 'Kelly',
            prenom: 'Ronie',
            dateDeNaissance:"7/05/1987",
            ville:'Nancy',
            avatar: {
                raw: 'img/kelly.jpg',
                small: 'img/kelly.jpg',
                regular: 'img/kelly.jpg'
            }
        })
    useEffect(() => {
        // auth.onAuthStateChange(() => {
        //     setUser(auth.user())
        // })
    }, []);
    const exposed = user;
    return <Context.Provider value={exposed}>
        {children}
    </Context.Provider>
}
export const useUser = () => useContext(Context);
export default UserProvider;