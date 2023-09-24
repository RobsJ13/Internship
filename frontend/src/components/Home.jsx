import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Your custom CSS for styling

const car_img=[
    'https://assetscdn1.paytm.com/images/catalog/view_item/2027329/1694055226012.jpeg?format=webp&imwidth=1024',
    'https://assetscdn1.paytm.com/images/catalog/view_item/1968590/1692962571451.jpg?format=webp&imwidth=1024',
    'https://assetscdn1.paytm.com/images/catalog/view_item/1992891/1693391040391.jpg?format=webp&imwidth=1024'
];

const movies = [
  {
    name: 'RDX',
    cast: 'Shane Nigam, Antony Varghese, Neerak Madhav',
    image: 'https://cdn.123telugu.com/content/wp-content/uploads/2023/09/rdx-movie.jpg',
  },
  {
    name: 'Jailer',
    cast: 'Rajnikanth, Mohanlal',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqK3_nPn_8UHFtyOFgDtrx1d_DfmngcZ3qbTLHZq7vbIrrllSx',
  },
  {
    name: 'Mark Antony',
    cast: 'Vishal,S J Suryah',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mark-antony-et00367366-1692281157.jpg',
  },
  {
    name: 'Jawan',
    cast: 'SRK, Nayanthara',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg',
  },
  {
    name: 'Rani - The Real Story',
    cast: 'Indrans, Bhavana, Guru Somasundaram',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rani-the-real-story-et00370120-1695182555.jpg',
  },
  {
    name: 'Nadhikalil Sundari Yamuna',
    cast: 'Dhyan Sreenivasan,Aju Varghese',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/nadikalil-sundari-yamuna-et00369468-1694503762.jpg',
  },
  {
    name: 'Theeppori Benny',
    cast: 'Arjun Ashokan',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/theeppori-benny-et00370130-1695120203.jpg',
  },

  // Add more movie objects as needed
];

function Home() {
  return (
    <div className="home">
      <Carousel style={{ width: '100%',height:"100%"}}>
        {car_img.map((car_img, index) => (
            <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={car_img}
              alt={'movie_image'}
               style={{
                 maxWidth: 2000,
                 objectFit: 'contain'
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Container className="movie-container">
        <Row>
          {movies.map((movie, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="movie-card">
                <Card.Img variant="top" src={movie.image} alt={movie.name} />
                <Card.Body>
                  <Card.Title>{movie.name}</Card.Title>
                  <Card.Text>Cast: {movie.cast}</Card.Text>
                  <Button variant="primary">Book Ticket</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
