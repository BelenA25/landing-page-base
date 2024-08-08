
export function VideoEmbed() {
    return (
        <div className="relative" style={{ maxWidth: '640px', width: '100%', aspectRatio: '16 / 9' }}>
            <iframe
                src="https://www.youtube.com/embed/sQ22pm-xvrE"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
    )
}