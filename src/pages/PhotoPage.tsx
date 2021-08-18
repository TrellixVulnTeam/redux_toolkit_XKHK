import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PhotoListState, PhotoState } from "src/features/photos/photosSlice";
import { requestPhotoList } from "src/features/photos/photosSlice";

interface PhotoPageState {
  photoList: PhotoState[];
  fetchPhoto: any;
}

const PhotoPage: React.FC<PhotoPageState> = ({ photoList, fetchPhoto }) => {
  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div>
      {photoList.map((data) => (
        <p key={data.id}>{data.title}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state: PhotoListState | any) => ({
  photoList: state.photo.photoList,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPhoto: () => dispatch(requestPhotoList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
