const html = require('choo/html')

module.exports = function(state, prev, send) {
    return html`
    <ul class="portfolio">
        ${state.projects.map( (project, index) => html`
            <li class="portfolio-item">
                <span>
                    <video poster="${project.featured_image_path}" preload="none" loop muted>
                        <source type="video/mp4" data-src="${project.featured_video_path}" />
                    </video>
                    <div class="portfolio-itemBorder"></div>
                    <div class="portfolio-itemImage" style="background-image: url('${project.featured_image_path}');"></div>
                    <img class="portfolio-itemImage-touch" data-src="${project.featured_image_path}" alt="" />
                </span>
                <a class="portfolio-itemExternalLink" href="${project.site.url}" target="_blank">${project.site.url_title}</a>
            </li>`
        )}
    </ul>`
}