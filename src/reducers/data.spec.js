import casual from 'casual';

import data from './data';

describe('data reducer', () => {
  it('should UPDATE_UPLOAD_PROGRESS', () => {
    const state = {
      songs: [],
      uploadProgress: 0,
    };
    const action = { type: 'UPDATE_UPLOAD_PROGRESS', uploadProgress: 26.8 };
    expect(data(state, action)).toEqual({
      songs: [],
      uploadProgress: 27,
    });
  });

  it('should FETCH_SONGS', () => {
    const songs = Array.from(
      { length: Math.floor(Math.random() * 10) },
      () => ({
        name: casual.title,
        artist: casual.title,
        fileId: casual.uuid,
      })
    );
    const state = { songs: [], uploadProgress: 0, songs };
    const action = { type: 'FETCH_SONGS', songs };
    expect(data(state, action)).toEqual({
      loading: false,
      songs,
      uploadProgress: 0,
    });
  });
});
