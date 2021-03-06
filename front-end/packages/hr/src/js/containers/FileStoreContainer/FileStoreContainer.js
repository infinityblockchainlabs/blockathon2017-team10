import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Box from '@meditrak/base/dist/components/Box';
import Web3 from 'web3';

import Heading from '@meditrak/base/dist/components/Heading';
import FormField from '@meditrak/base/dist/components/FormField';
import TextInput from '@meditrak/base/dist/components/TextInput';
import ButtonWithLoading from '@meditrak/base/dist/components/ButtonWithLoading';

import FileUploadContainer from '../FileUploadContainer';

import ViewStore from './stores';

import './FileStoreContainer.scss';

const CLASSROOT = 'file-store-container';

const web3 = new Web3();

@observer
class FileStoreContainer extends Component {
  constructor() {
    super();

    this.viewStore = new ViewStore();
  }

  onSubmit = () => {
    this.viewStore.submit();
  };

  handleSelectFile = (file) => {
    this.viewStore.setFile(file);
  };

  render() {
    const { form } = this.viewStore;
    return (
      <div className={`${CLASSROOT} container`}>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Heading align="center">Store Medical Record File</Heading>
            <Box className="content-wrapper" justify="center" align="center">
              <div className={`${CLASSROOT}__form`}>
                <div className={`${CLASSROOT}__form-fields`}>
                  <div className="standalone-label">{form.$('privateKey').label}</div>
                  <FormField error={form.$('privateKey').error}>
                    <TextInput
                      value={form.$('privateKey').value}
                      onDOMChange={form.$('privateKey').sync}
                    />
                  </FormField>
                  <div className="standalone-label">{form.$('password').label}</div>
                  <FormField error={form.$('password').error}>
                    <TextInput
                      type="password"
                      value={form.$('password').value}
                      onDOMChange={form.$('password').sync}
                    />
                  </FormField>
                  <FileUploadContainer
                    onSelect={this.handleSelectFile}
                    file={this.viewStore.file}
                  />
                </div>
                <div className={`${CLASSROOT}__form-actions`}>
                  <ButtonWithLoading
                    isLoading={this.viewStore.isSaving}
                    label="Submit"
                    primary
                    onClick={e => form.onSubmit(e, { onSuccess: this.onSubmit })}
                  />
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    );
  }
}

FileStoreContainer.propTypes = {};

FileStoreContainer.defaultProps = {};

export default FileStoreContainer;
