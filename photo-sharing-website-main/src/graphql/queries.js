/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const generate = /* GraphQL */ `
  query Generate($payload: String) {
    generate(payload: $payload)
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        date
        createdAt
        updatedAt
        owner
        photos {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      description
      date
      createdAt
      updatedAt
      owner
      photos {
        items {
          id
          albumId
          bucket
          exifcamera
          exiflens
          labels
          cover
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      albumId
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      middlesize {
        key
        width
        height
      }
      exifcamera
      exiflens
      labels
      cover
      createdAt
      updatedAt
      album {
        id
        name
        description
        date
        createdAt
        updatedAt
        owner
        photos {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        albumId
        bucket
        fullsize {
          key
          width
          height
        }
        thumbnail {
          key
          width
          height
        }
        middlesize {
          key
          width
          height
        }
        exifcamera
        exiflens
        labels
        cover
        createdAt
        updatedAt
        album {
          id
          name
          description
          date
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const listPhotosByAlbum = /* GraphQL */ `
  query ListPhotosByAlbum(
    $albumId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotosByAlbum(
      albumId: $albumId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        albumId
        bucket
        fullsize {
          key
          width
          height
        }
        thumbnail {
          key
          width
          height
        }
        middlesize {
          key
          width
          height
        }
        exifcamera
        exiflens
        labels
        cover
        createdAt
        updatedAt
        album {
          id
          name
          description
          date
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
