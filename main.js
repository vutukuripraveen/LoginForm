function searchBar() {
    document.getElementById('search_bar').style.display = 'block';
    document.getElementById('search_box').style.display = 'block';
    document.getElementById('search_toggle').style.display = 'none';
    document.getElementById('search_vanish').style.display = 'block';
    document.getElementById('contacts').style.display = 'block';
    document.getElementById('container').style.overflow = 'scroll'
    // document.getElementById('search_bar').style.marginLeft='20%';
}

function searchBarVanish() {
    document.getElementById('search_bar').style.display = 'none';
    document.getElementById('search_box').style.display = 'none';
    document.getElementById('search_toggle').style.display = 'block';
    document.getElementById('search_vanish').style.display = 'none';
    document.getElementById('contacts').style.display = 'none';
    document.getElementById('container').style.overflow = 'hidden'
    // document.getElementById('search_bar').style.marginLeft='20%';
}