import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

class EditSongForm extends React.Component {
  handleSubmit = () => {
    const { id } = this.props;
    // TODO
  };

  render() {
    const { id, trigger, name, artist } = this.props;
    return (
      <Modal trigger={trigger}>
        <Modal.Header>Edit Song Info</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field required>
                <label>Song Title</label>
                <input
                  defaultValue={name}
                  ref="name"
                  placeholder="Stairway to Heaven"
                />
              </Form.Field>
              <Form.Field>
                <label>Artist</label>
                <input
                  defaultValue={artist}
                  ref="artist"
                  placeholder="The Beatles"
                />
              </Form.Field>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button type="reset" color="red">
                  Delete Song
                </Button>
                <Button type="submit" color="blue">
                  Update Song
                </Button>
              </div>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default EditSongForm;
