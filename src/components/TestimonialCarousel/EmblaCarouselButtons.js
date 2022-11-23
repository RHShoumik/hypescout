
export const DotButton = ({ selected, onClick }) => (
    <div className={`big__dot ${selected ? "is-selected1" : ""}`}>
        <button
            className={`embla__dot ${selected ? "is-selected" : ""}`}
            type="button"
            onClick={onClick}
        />
    </div>
);
