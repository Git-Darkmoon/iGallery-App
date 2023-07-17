function SearchForm() {
  return (
    <form className="gallery-form">
      <input
        type="text"
        name="searchPic"
        id="gallery-prompt"
        placeholder="Search whatever, maybe cats..."
        required
      />
      <button type="submit" className="btn primary-btn">
        See Photos
      </button>
    </form>
  )
}

export default SearchForm
