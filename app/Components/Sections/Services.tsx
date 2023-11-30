import Heading from "../Heading/Heading";
import Card from "../Card/Card";
function Services() {
  return (
    <>
      <div className="services flex flex-col content-center justify-center ">
        <Heading class='text-center'>Emerald Vista</Heading>
        <div className=" flex flex-wrap justify-around ">
          <Card img="/services/image1.png">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic non aperiam? Error repellendus culpa deserunt, impedit praesentium 
          </Card>
          <Card img="/services/image1.png">
          temporibus necessitatibus corrupti optio, voluptatem sequi ullam nemo? Quod harum incidunt unde laborum minima dolorum illo veritatis
          </Card>
          <Card img="/services/image1.png">
          cupiditate accusamus nesciunt mollitia dicta explicabo, nulla sapiente soluta excepturi deserunt vitae non officia ipsam 
          </Card>
          <Card img="/services/image1.png">
          voluptatum quidem ullam ab labore. Assumenda hic nihil aperiam, vero sunt sapiente pariatur ipsum excepturi dolores explicabo
          </Card>
        </div>
      </div>
    </>
  );
}
export default Services;
