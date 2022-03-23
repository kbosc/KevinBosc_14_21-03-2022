import * as Style from "./error.style"

export default function Error() {
    return (
        <Style.MainContent>
                <Style.MainError>
                    404
                </Style.MainError>
                <Style.Maintext>
                    Oups! La page que vous demandez n'existe pas.
                </Style.Maintext>
            <Style.LinkError to="/" >Retourner sur la page d’accueil</Style.LinkError>      
        </Style.MainContent>
    );
}
