import Image from 'next/image';
// import styles from './SingleLocationCard.module.css';

const SingleLocationCard = ({prop}) =>{
  const {name, order, img} = prop;
  return(
    <div className= ''>
      <div>
        <h1>{order}</h1>
        <h1>{name}</h1>
        <h3>
          Founded in Miami, Digital Silk helps Floridian businesses grow their
          brands online. Our services stem from a Miami-Dade County hub while
          our global team serves brands from across the U.S. and
          internationally.
        </h3>
        <h2>CLIENTS:</h2>
        <div>
          <Image src='/SVG/rightBold.svg' height={10} width={10} alt='j' />
          <p>{name} Country Day School, Amold Jewelers, FieldEdge, Rollink, Barton G</p>
        </div>
        <div>
          <div>
            <Image src='/SVG/location.jpg' height={10} width={10} alt='j' />
            <p>
              17975 Collins Avenue <br />
              Sunny Isles Beach, FL 33160
            </p>
          </div>
        </div>
        <div>
          <div>
            <Image src='/SVG/call.jpg' height={10} width={10} alt='j' />
            <p>(800) 206-9413</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SingleLocationCard