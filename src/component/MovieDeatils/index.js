
import { ListContainer, Image, Title, Rating, Button, LinkItem } from "./styledComponent"
const MovieDetails = (props) => {
    const { details } = props
    const { title, rating, posterPath,id } = details
    const path = `https://image.tmdb.org/t/p/w500${posterPath}`
    return (
      <LinkItem to={`/${id}`} >
       <ListContainer>
            <Button>
                <Image src={path} />
                <Title>{title}</Title>
                <Rating>Rating: {rating}</Rating>
            </Button>

        </ListContainer>
      </LinkItem>
       
    )

}


export default MovieDetails