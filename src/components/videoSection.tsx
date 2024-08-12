import Typography from "./Typography/typography";


export function VideoSection() {
    return (
        <section className="video-section py-8">
            <div className="container mx-auto px-4">
                <Typography tag="h2">Video display</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veniam, quibusdam quod id beatae tempore vitae asperiores impedit in officia nulla aspernatur consequuntur doloremque saepe corrupti repellendus, sint repudiandae odio!</Typography>
                <div className="flex justify-center">
                    <div className="relative" style={{ maxWidth: '640px', width: '100%', aspectRatio: '16 / 9' }}>
                        <iframe
                            src="https://www.youtube.com/embed/sQ22pm-xvrE"
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}