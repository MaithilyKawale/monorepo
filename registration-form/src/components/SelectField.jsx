function SelectField({ label, options, value, onChange }) {
    return (
        <div className="input-field">
            <label>{label}</label>
            <select value={value} onChange={e => onChange(e.target.value)}>
                <option value="">Select option</option>
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectField;
