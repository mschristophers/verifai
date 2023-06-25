pragma solidity ^0.8.13;

import {Router} from "@hyperlane-xyz/core/contracts/Router.sol";

contract CrossChainOperations is Router {
    uint256 public constant HANDLE_GAS_AMOUNT = 50_000;

    mapping(uint32 => uint256) public sentTo;

    event SentCrossChainOperation(
        uint32 indexed origin,
        uint32 indexed destination,
        string message
    );

    constructor(address _mailbox, address _interchainGasPaymaster) {
        _transferOwnership(msg.sender);
        _setMailbox(_mailbox);
        _setInterchainGasPaymaster(_interchainGasPaymaster);
    }

    function sendToChain(uint32 _destinationDomain, string calldata _message)
        external
        payable
    {
        sentTo[_destinationDomain] += 1;
        _dispatchWithGas(
            _destinationDomain,
            bytes(_message),
            HANDLE_GAS_AMOUNT,
            msg.value,
            msg.sender
        );
        emit SentCrossChainOperation(
            mailbox.localDomain(),
            _destinationDomain,
            _message
        );
    }

    function _handle(
        uint32 _origin,
        bytes32 _sender,
        bytes calldata _message
    ) internal override {
        // Handle received message here
    }
}
