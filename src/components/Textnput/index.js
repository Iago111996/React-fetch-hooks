import './styles.css';

export const TextInput = ({ searchValeu, hendleChange }) => {
    return(
        <input
        placeholder="Digite sua pesquisa..."
        className="text-input" 
        onChange={hendleChange}
        value={searchValeu}
        type="search" 
        />
    )
}
