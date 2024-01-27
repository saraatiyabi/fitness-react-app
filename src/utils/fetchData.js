export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': "c426bc75f9msh51a2d7e76d5a131p11b0e7jsn3610fd810d12"
    }
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc8d3867abmsh74b52fc552979e0p13c9a7jsn0b77f2a90883',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const responseData = await response.json();

    return responseData;
}