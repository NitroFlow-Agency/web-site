let images = document.getElementsByTagName("img")
window.onload = () => 
{
    Array.from(images).forEach(image => {
        let alt = image.src.replace(/^.*[\\/]/, '')
        alt = alt.substring(0, alt.lastIndexOf('.')).replaceAll("%20", ' ')
        console.log(alt)
        image.setAttribute("alt", alt)
    })
}