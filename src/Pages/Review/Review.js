import {
  Box,
  Container,
  LinearProgress, Rating,
  Stack,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
export default function Review() {
  const useStyle = makeStyles({
    swiperContainer: {
      width: "100%",
      display: "flex !important",
    },
    reviewImage: {
      width: "100%",
    },
    reviewSingleBox: {
      background: "#fe6b8b",
      boxShadow: "0px 0px 10px #fe6b8b",
    },
    reviewImageBox: {
      width: "80px",
      height: "80px",
      borderRadius: "40%",
      overflow: "hidden",
      position: "absolute",
      top: "-40px",
      border: '4px solid #fe6b8b',
      boxShadow: '0px 0px 10px #fff',
    },
  });

  const { reviewImage, reviewSingleBox, reviewImageBox } = useStyle();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch("https://fierce-meadow-56103.herokuapp.com/review");
      const data = await response.json();
      console.log(data);
      setReviews(data);
    };
    fetchReviews();
  }, []);

  return (
    <Box>
      <Container sx={{ overflowX: "hidden" }}>
        {reviews.length === 0 ? (
          <Box
            sx={{
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
              <LinearProgress color="secondary" />
              <LinearProgress color="success" />
              <LinearProgress color="inherit" />
            </Stack>
          </Box>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {reviews.map((review, index) => (
              <SwiperSlide className={reviewSingleBox} key={index}>
                <>
                  <Box className={reviewImageBox}>
                    <img
                      className={reviewImage}
                      src={`data:image/png;base64,${review.image}`}
                      alt={review.name}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" color="#fff">{review.name}</Typography>
                    <Rating
                      name="read-only"
                      value={Number(review.rating)}
                      readOnly
                    />
                  </Box>
                  <Box className="mt-4">
                    <Typography variant="body" color="#fff">{review.message}</Typography>
                  </Box>
                  <Box className="mt-4" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Typography variant="h6" color="#fff">{review.date}</Typography>
                    <Typography variant="h6" color="#fff">{review.email}</Typography>
                  </Box>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </Box>
  );
}
