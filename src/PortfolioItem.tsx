import "./PortfolioItem.css";

interface PortfolioItemProps {
  url: string;
  title: string;
  description: string;
  detail: string;
  task: string;
  result: string;
  images: string[];
  toolingLogos: string[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  url,
  title,
  description,
  detail,
  task,
  result,
  images,
  toolingLogos,
}) => {
  return (
    <>
      <div className="text-center">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="text-2xl md:text-4xl font-medium underline">
            {title}
          </h2>
          <span className="material-symbols-outlined">link</span>
        </a>
        <p className="text-2xl pb-6">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="pr-10">
          <h2 className="text-xl font-medium">Overview:</h2>
          <p className="text-sm">{detail}</p>
          <h2 className="text-xl font-medium">Task:</h2>
          <p className="text-sm">{task}</p>
          
        </div>
        <div>
        <h2 className="text-xl font-medium">Result:</h2>
          <p className="text-sm">{result}</p>
          <h2 className="text-xl font-medium">Tools:</h2>

          <div className="flex flex-row">
            {toolingLogos.map((logo, index) => (
              <div key={index}>
                <img
                  src={logo}
                  alt={`Tools ${index + 1}`}
                  className="max-h-14 my-6 pr-6"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Portfolio ${index + 1}`}
              className="mx-auto h-auto pb-10"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioItem;
