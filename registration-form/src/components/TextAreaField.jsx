function TextAreaField({ label, value, onChange }) {
    return (
        <div className="input-field">
            <label>{label}</label>
            <textarea value={value} onChange={e => onChange(e.target.value)} />
        </div>
    );
}

export default TextAreaField;
