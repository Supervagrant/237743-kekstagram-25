import { openFullSizePhoto } from './full-photo.js';
import { getData } from './api.js';
import { filter } from './filters.js';

const picturesContainer = document.querySelector('.pictures');
const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarListFragment = document.createDocumentFragment();

const renderListPhoto = (listPhotos) => {

  console.log(picturesContainer.querySelectorAll('.picture').length);

  listPhotos.forEach(({url, likes, comments, description }) => {
    const miniatureElement = miniatureTemplate.cloneNode(true);
    miniatureElement.querySelector('img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.append(miniatureElement);
    miniatureElement.addEventListener('click', () => {
      openFullSizePhoto(url, likes, comments, description);
    });
    picturesContainer.append(similarListFragment);

  });


};

// getData(renderListPhoto);

getData(filter);

export { renderListPhoto };
