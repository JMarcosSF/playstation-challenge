import React from 'react';
import { Button, Table, Icon } from 'antd';

const NodeShow = ({selectedNode}) => {
  console.log('In NodeShow:')
  console.log(selectedNode);

  const data = {
    "id": "b5393d76-194b-4651-8343-e5bed852839b",
    "nameEn": "PS Appd",
    "nameJp": "PS App",
    "type": "folder",
    "parentid": "8172207d-da97-4be6-8f3a-cf5ef57fa3ae",
    "siblingOrder": 0,
    "children": [
      {
        "id": "ec5065f6-f57d-41d4-b3e4-be8bb326e98c",
        "nameEn": "foo",
        "nameJp": "foo",
        "type": "folder",
        "parentid": "b5393d76-194b-4651-8343-e5bed852839b",
        "siblingOrder": 1,
        "children": [
          {
            "id": "150036d0-7fa8-4b96-8f70-c03fd18ef124",
            "nameEn": "Freegggg",
            "nameJp": "PS4trtj",
            "type": "folder",
            "parentid": "ec5065f6-f57d-41d4-b3e4-be8bb326e98c",
            "siblingOrder": 0,
            "children": [
              {
                "id": "21ccb38b-484a-4c3a-b54d-74038f3c4d24",
                "nameEn": "1",
                "nameJp": "1",
                "type": "folder",
                "parentid": "150036d0-7fa8-4b96-8f70-c03fd18ef124",
                "siblingOrder": 0,
                "children": []
              },
              {
                "id": "1c60f8ed-37d7-4ee6-8295-2e50f23c3839",
                "nameEn": "2",
                "nameJp": "fg",
                "type": "folder",
                "parentid": "150036d0-7fa8-4b96-8f70-c03fd18ef124",
                "siblingOrder": 1,
                "children": []
              },
              {
                "id": "a3633ddf-278e-4a1d-b8d5-dc1fc2ea42ad",
                "nameEn": "1",
                "nameJp": "1",
                "type": "link",
                "data": {
                  "url": "https://www.npmjs.com/package/resolve_data_front"
                },
                "parentid": "150036d0-7fa8-4b96-8f70-c03fd18ef124",
                "siblingOrder": 2,
                "children": []
              },
              {
                "id": "b47318d6-4575-4b2a-8a1f-65f934e0519b",
                "nameEn": "7",
                "nameJp": "7",
                "type": "link",
                "data": {
                  "url": "http://localhost:3000"
                },
                "parentid": "150036d0-7fa8-4b96-8f70-c03fd18ef124",
                "siblingOrder": 3,
                "children": []
              },
              {
                "id": "e1bd84b8-e8cf-4195-83fd-013bfff8b969",
                "nameEn": "cnn",
                "nameJp": "cnn",
                "type": "link",
                "data": {
                  "url": "http://www.cnn.com"
                },
                "parentid": "150036d0-7fa8-4b96-8f70-c03fd18ef124",
                "siblingOrder": 4,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": "12556e8f-db00-46d9-8f1e-52f9f7dd7d10",
        "nameEn": "hello",
        "nameJp": "hello",
        "type": "folder",
        "parentid": "b5393d76-194b-4651-8343-e5bed852839b",
        "siblingOrder": 2,
        "children": []
      }
    ]
  }

  // TODO Add breadcrumb
  const tableData = data.children;
  const columns = [
    {
      title: '',
      dataIndex: 'nameEn',
      key: 'nameEn',
    }, {
      title: ''
    }];

  const buttonStyle = {
    marginRight: '5px'
  }
  return (
    <div>
      <div >
        <Button style={ buttonStyle } icon="folder-add">New Folder</Button>
        <Button style={ buttonStyle } icon="link">Add Link</Button>
      </div>
      // TODO Replace with menu
      <Table columns={columns} rowKey={'id'} dataSource={tableData} />
    </div>
  );
};

export default NodeShow;
