function makeFolders() {
  return [
    {
      id: 1,
      name: 'First folder'
    },
    {
      id: 2,
      name: 'Second folder'
    }
  ];
}

function makeNotes() {
  return [
    {
      id: 1,
      name: 'Noteeee',
      content: 'A note',
      modified: 'Oct 1',
      folderId: '2'
    },
    {
      id: 2,
      name: 'OOOOOOO',
      content: 'A note',
      modified: 'Aug 1',
      folderId: '1'
    },
    {
      id: 3,
      name: 'YEEEEEE',
      content: 'A note',
      modified: 'Jan 1',
      folderId: '1'
    },
    {
      id: 4,
      name: 'Noteeeerrreerere',
      content: 'A note like no other',
      modified: 'Dec 1',
      folderId: '1'
    }
  ];
}

module.exports = {
  makeFolders,
  makeNotes
};