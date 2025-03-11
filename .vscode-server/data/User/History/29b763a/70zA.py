import xml.etree.ElementTree as ET


def serialize_to_xml(dictionary, filename):
    """
    Serializes a Python dictionary to XML and saves it to the given filename.

    Args:
        dictionary (dict): The dictionary to serialize.
        filename (str): The filename to save the XML data.
    """
    root = ET.Element("data")

    for key, value in dictionary.items():
        item = ET.SubElement(root, key)
        item.text = str(value)

    tree = ET.ElementTree(root)
    tree.write(filename)

def deserialize_from_xml(filename):
    """
    Deserializes XML data from a file and returns a Python dictionary.

    Args:
        filename (str): The filename to read the XML data from.

    Returns:
        dict: The deserialized Python dictionary.
    """
    tree = ET.parse(filename)
    root = tree.getroot()

    dictionary = {}
    for item in root:
        dictionary[item.tag] = item.text

    return dictionary
