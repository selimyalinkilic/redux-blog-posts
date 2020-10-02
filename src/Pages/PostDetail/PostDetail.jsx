import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "../../redux/actions/postsAction";
import "./PostDetail.scss";

const PostDetail = (props) => {
  let id = props.match.params.id;
  const post = useSelector((state) => state.posts.postDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetail(id));
  }, [dispatch, id]);
  console.log(post);
  return (
    <div className="post-detail mt-4">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="w-75 d-flex flex-column ml-auto mr-auto">
              <h2 className="post-title mb-4">{post?.title}</h2>
              <div className="post-texts">
                <p className="post-text mb-4 text-justify"> {post?.body} </p>
                <p className="post-text mb-4 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam volutpat eros egestas, ornare dolor eu, dapibus lorem.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Integer non diam finibus,
                  feugiat mauris id, faucibus nulla. In tincidunt ac arcu sed
                  fermentum. Mauris mattis eros nulla, eu blandit mi commodo
                  sed. Vivamus a massa elit. Duis semper, elit ut fermentum
                  pharetra, ligula ligula auctor elit, ut interdum nisi nisl eu
                  nulla. Quisque lobortis libero id lorem condimentum, quis
                  pulvinar purus mattis. Fusce leo orci, rutrum posuere leo
                  eget, gravida elementum dui. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Morbi eget nisl vel odio consectetur consequat.
                </p>
                <p className="post-text mb-4 text-justify">
                  Mauris quis lectus arcu. Curabitur dignissim, arcu quis
                  vestibulum congue, lorem velit vulputate nulla, sit amet
                  placerat augue enim eu diam. Fusce dapibus sapien vitae
                  bibendum ullamcorper. Etiam vestibulum consectetur ipsum, a
                  hendrerit sem varius ut. Nunc pretium tortor at elit interdum,
                  a sodales lorem accumsan. Cras tristique sed magna at posuere.
                  Nam laoreet aliquam orci sed convallis. Proin vestibulum
                  commodo justo, id tincidunt massa consectetur non. Donec odio
                  purus, rhoncus nec commodo et, efficitur quis ipsum. Mauris
                  sit amet velit lobortis, congue massa a, sodales massa.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostDetail;
