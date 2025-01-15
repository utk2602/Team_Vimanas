const VideoFeature = ({ imageUrl, title, date }) => {/*i am not able to implement this feature properly will work on it*/
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <div className="flex items-center mb-4">
            <div
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
              role="button"
              aria-label="Play video"
            >
              <Play className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-white/60">{date}</p>
        </div>
      </motion.div>
    );
  };
  
  export default VideoFeature;
  