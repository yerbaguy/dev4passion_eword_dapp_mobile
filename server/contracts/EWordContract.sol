 pragma solidity ^0.8.4;
// pragma solidity ^0.8.9;

contract EWordContract {

    event AddWord(address recipient, uint wordId);

    struct EWord {
        uint id;
        string engword;
        string plword;
    }

    EWord[] private ewords;

    mapping(uint256 => address) wordToOwner;

    function addEWord(string memory engword, string memory plword) external {

        uint wordId = ewords.length;

        ewords.push(EWord(wordId, engword, plword));
        wordToOwner[wordId] = msg.sender;

        emit AddWord(msg.sender, wordId);

    }

    function getEWords() external view returns(EWord[] memory) {
        EWord[] memory temporary = new EWord[](ewords.length);
        uint counter = 0;

        for (uint i = 0; i < ewords.length; i++) {

             temporary[counter] = ewords[i];
             counter ++;
        }

        EWord[] memory result = new EWord[](counter);

        for (uint i = 0; i < counter; i++) {

           result[i] = temporary[i];
        }

        return result;
    }

    // function getEngWord(uint256 wordid) external view returns (string memory) {
    //         return ewords[wordid].engword;
    // }
     function getEngWordPlWord(uint256 wordid) external view returns (string memory, string memory) {
           // return ewords[wordid].engword;
            return (ewords[wordid].engword, ewords[wordid].plword);
    }

    function getPlWord(uint256 wordid) external view returns (string memory) {
        return  ewords[wordid].plword;
    }
}