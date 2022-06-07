import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg"

interface Props {
    busca: string, 
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export function Buscador({busca, setBusca}: Props) {
    return (
        <div className={styles.buscador}>
            <input 
            type="text"
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
            placeholder="Buscar"
            autoFocus = {true}
            />
            <CgSearch
                size={20}
                color="#4C4D5E"
            />
        </div>
    );
}