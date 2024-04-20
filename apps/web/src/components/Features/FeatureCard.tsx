import { isValidElement, ReactNode } from 'react';

type FeatureCardProps = {
  featureItem: {
    icon: string;
    title?: string | JSX.Element;
    description?: string | ReactNode;
  };
};

function Ethereum() {
  return (
    <svg width="29" height="44" viewBox="0 0 29 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.7013 0L0.652344 22.9167L14.7013 29.3333L28.7502 22.9167L14.7013 0Z"
        fill="white"
      />
      <path
        d="M0.652344 27.5L14.7013 44L28.7502 27.5L14.7013 33.9167L0.652344 27.5Z"
        fill="white"
      />
    </svg>
  );
}

function Base() {
  return (
    <svg width="59" height="32" viewBox="0 0 59 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_3964_78668" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.7083 23.8236C32.138 21.4678 32.959 18.7166 32.959 15.7778C32.959 12.8389 32.138 10.0878 30.7083 7.73196C29.0339 10.0007 28.0503 12.7827 28.0503 15.7778C28.0503 18.7728 29.0339 21.5549 30.7083 23.8236ZM29.5046 25.5386C27.3412 22.8531 26.0503 19.463 26.0503 15.7778C26.0503 12.0926 27.3412 8.70243 29.5046 6.01692C26.5526 2.35247 21.9761 0 16.8382 0C7.93492 0 0.717407 7.06395 0.717407 15.7778C0.717407 24.4916 7.93492 31.5556 16.8382 31.5556C21.9761 31.5556 26.5526 29.2031 29.5046 25.5386Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.7083 23.8236C32.138 21.4678 32.959 18.7166 32.959 15.7778C32.959 12.8389 32.138 10.0878 30.7083 7.73196C29.0339 10.0007 28.0503 12.7827 28.0503 15.7778C28.0503 18.7728 29.0339 21.5549 30.7083 23.8236ZM29.5046 25.5386C27.3412 22.8531 26.0503 19.463 26.0503 15.7778C26.0503 12.0926 27.3412 8.70243 29.5046 6.01692C26.5526 2.35247 21.9761 0 16.8382 0C7.93492 0 0.717407 7.06395 0.717407 15.7778C0.717407 24.4916 7.93492 31.5556 16.8382 31.5556C21.9761 31.5556 26.5526 29.2031 29.5046 25.5386Z"
        fill="white"
      />
      <path
        d="M30.7083 23.8236L29.0991 25.0113L30.8705 27.4113L32.4181 24.8612L30.7083 23.8236ZM30.7083 7.73196L32.4181 6.69432L30.8705 4.14426L29.0991 6.5443L30.7083 7.73196ZM29.5046 25.5386L31.0621 26.7933L32.0729 25.5386L31.0621 24.2839L29.5046 25.5386ZM29.5046 6.01692L31.0621 7.27161L32.0729 6.01692L31.0621 4.76224L29.5046 6.01692ZM30.959 15.7778C30.959 18.3385 30.2448 20.7324 28.9985 22.786L32.4181 24.8612C34.0312 22.2032 34.959 19.0947 34.959 15.7778H30.959ZM28.9985 8.76959C30.2448 10.8232 30.959 13.217 30.959 15.7778H34.959C34.959 12.4608 34.0312 9.35238 32.4181 6.69432L28.9985 8.76959ZM29.0991 6.5443C27.1818 9.14207 26.0503 12.3371 26.0503 15.7778H30.0503C30.0503 13.2283 30.8859 10.8592 32.3175 8.91962L29.0991 6.5443ZM26.0503 15.7778C26.0503 19.2184 27.1818 22.4135 29.0991 25.0113L32.3175 22.6359C30.8859 20.6963 30.0503 18.3272 30.0503 15.7778H26.0503ZM24.0503 15.7778C24.0503 19.9397 25.5103 23.7684 27.9472 26.7933L31.0621 24.2839C29.1722 21.9379 28.0503 18.9863 28.0503 15.7778H24.0503ZM27.9472 4.76224C25.5103 7.78716 24.0503 11.6159 24.0503 15.7778H28.0503C28.0503 12.5692 29.1722 9.61769 31.0621 7.27161L27.9472 4.76224ZM16.8382 2C21.3546 2 25.3644 4.06559 27.9472 7.27161L31.0621 4.76224C27.7408 0.63936 22.5976 -2 16.8382 -2V2ZM2.71741 15.7778C2.71741 8.20885 8.99873 2 16.8382 2V-2C6.87112 -2 -1.28259 5.91905 -1.28259 15.7778H2.71741ZM16.8382 29.5556C8.99873 29.5556 2.71741 23.3467 2.71741 15.7778H-1.28259C-1.28259 25.6365 6.87112 33.5556 16.8382 33.5556V29.5556ZM27.9472 24.2839C25.3644 27.49 21.3546 29.5556 16.8382 29.5556V33.5556C22.5976 33.5556 27.7408 30.9162 31.0621 26.7933L27.9472 24.2839Z"
        fill="white"
        mask="url(#path-1-inside-1_3964_78668)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.7083 23.8236C30.3452 24.4219 29.9428 24.9947 29.5046 25.5386C32.4567 29.2031 37.0332 31.5556 42.1711 31.5556C51.0744 31.5556 58.2919 24.4916 58.2919 15.7778C58.2919 7.06395 51.0744 0 42.1711 0C37.0332 0 32.4567 2.35248 29.5046 6.01693C29.9428 6.56084 30.3452 7.13366 30.7083 7.73197C33.2654 4.26733 37.4337 2 42.1711 2C50.0106 2 56.2919 8.20885 56.2919 15.7778C56.2919 23.3467 50.0106 29.5556 42.1711 29.5556C37.4337 29.5556 33.2654 27.2882 30.7083 23.8236Z"
        fill="white"
      />
    </svg>
  );
}

function Coinbase() {
  return (
    <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.6787 29.25C15.1644 29.25 10.6981 24.8869 10.6981 19.5C10.6981 14.1131 15.1644 9.75 20.6787 9.75C25.6192 9.75 29.7196 13.2681 30.5097 17.875H40.5652C39.7169 7.865 31.1418 0 20.6787 0C9.65842 0 0.717407 8.73437 0.717407 19.5C0.717407 30.2656 9.65842 39 20.6787 39C31.1418 39 39.7169 31.135 40.5652 21.125H30.5097C29.7196 25.7319 25.6192 29.25 20.6787 29.25Z"
        fill="white"
      />
    </svg>
  );
}

function Terminal() {
  return (
    <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.673828 7V3V0H3.67383H38.5434H41.5434V3V7V29V32H38.5434H3.67383H0.673828V29V7ZM38.5434 7V29H3.67383V7H38.5434ZM9.92056 22.5L12.0662 24.6L19.5249 17.3L12.0662 10L9.86947 12.1L15.1825 17.3L9.92056 22.5ZM21.7727 21.8V24.8H33.0119V21.8H21.7727Z"
        fill="white"
      />
    </svg>
  );
}

export function FeatureCard({ featureItem: { icon, title, description } }: FeatureCardProps) {
  return (
    <div className="flex w-[290px] flex-shrink-0 flex-col space-y-16 bg-gray p-8 md:w-[330px]">
      {
        { ethereum: <Ethereum />, base: <Base />, terminal: <Terminal />, coinbase: <Coinbase /> }[
          icon
        ]
      }
      <div className="flex flex-col space-y-4">
        {isValidElement(title) ? (
          title
        ) : (
          <h3 className="font-mono text-lg uppercase text-white">{title}</h3>
        )}
        {isValidElement(description) ? (
          description
        ) : (
          <p className="text-md font-sans text-white">{description}</p>
        )}
      </div>
    </div>
  );
}
